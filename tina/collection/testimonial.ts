import type { Collection } from "tinacms";

const Testimonial: Collection = {
  name: "testimonial",
  label: "Testimonials",
  path: "content/testimonials",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "client_name",
      label: "Client Name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "client_photo",
      label: "Client Photo",
    },
    {
      type: "rich-text",
      name: "testimonial_text",
      label: "Testimonial Text (English)",
      required: true,
    },
    {
      type: "rich-text",
      name: "testimonial_text_vi",
      label: "Testimonial Text (Vietnamese)",
    },
    {
      type: "datetime",
      name: "wedding_date",
      label: "Wedding Date",
    },
    {
      type: "number",
      name: "rating",
      label: "Rating (1-5 stars)",
      required: true,
      ui: {
        validate: (value) => {
          if (value < 1 || value > 5) {
            return "Rating must be between 1 and 5";
          }
        }
      }
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Testimonial",
      description: "Show this testimonial on the homepage",
    },
    {
      type: "string",
      name: "wedding_location",
      label: "Wedding Location",
    },
    {
      type: "string",
      name: "wedding_venue",
      label: "Wedding Venue",
    },
    {
      type: "image",
      name: "wedding_photo",
      label: "Wedding Photo",
      description: "Optional photo from their wedding",
    }
  ],
};

export default Testimonial;