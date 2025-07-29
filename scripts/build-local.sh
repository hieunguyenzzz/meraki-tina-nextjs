#!/bin/bash

# First, build TinaCMS to generate client files
echo "Building TinaCMS client files..."
tinacms build --local --skip-indexing --skip-cloud-checks

# Start TinaCMS dev server in background for the build process
echo "Starting TinaCMS dev server for build..."
tinacms dev --verbose &
TINA_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "Cleaning up TinaCMS server..."
    kill $TINA_PID 2>/dev/null || true
    pkill -f "tinacms" || true
    exit $1
}

# Set trap to cleanup on script exit
trap 'cleanup $?' EXIT INT TERM

# Wait for TinaCMS server to be ready
echo "Waiting for TinaCMS server to be ready..."
timeout=60
while ! curl -s http://localhost:4001/graphql > /dev/null 2>&1; do
    if ! kill -0 $TINA_PID 2>/dev/null; then
        echo "TinaCMS server process died"
        exit 1
    fi
    sleep 1
    timeout=$((timeout - 1))
    if [ $timeout -eq 0 ]; then
        echo "Timeout waiting for TinaCMS server"
        exit 1
    fi
done

echo "TinaCMS server is ready, starting Next.js build..."
next build
BUILD_EXIT_CODE=$?

# Cleanup will be handled by trap
exit $BUILD_EXIT_CODE