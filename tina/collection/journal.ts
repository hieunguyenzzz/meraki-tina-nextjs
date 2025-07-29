import type { Collection } from "tinacms";

const Journal: Collection = {
  name: "journal",
  label: "Journal",
  path: "content/journal",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "title_vi",
      label: "Vietnamese Title",
      fields: [
        {
          type: "string",
          name: "value",
          label: "Title in Vietnamese",
        }
      ]
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "subtitle_vi",
      label: "Vietnamese Subtitle",
      fields: [
        {
          type: "string",
          name: "value",
          label: "Subtitle in Vietnamese",
        }
      ]
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "datetime",
      name: "wedding_date",
      label: "Wedding Date",
      required: true,
    },
    {
      type: "image",
      name: "hero_image",
      label: "Hero Image",
      required: true,
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured Image",
      required: true,
    },
    {
      type: "object",
      name: "wedding_details",
      label: "Wedding Details",
      fields: [
        {
          type: "string",
          name: "venue",
          label: "Venue",
          required: true,
        },
        {
          type: "object",
          name: "venue_vi",
          label: "Vietnamese Venue",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Venue in Vietnamese",
            }
          ]
        },
        {
          type: "number",
          name: "guest_count",
          label: "Guest Count",
        },
        {
          type: "string",
          name: "wedding_type",
          label: "Wedding Type",
          options: ["Destination Wedding", "Local Wedding", "Traditional Wedding", "Modern Wedding"],
        },
        {
          type: "object",
          name: "wedding_type_vi",
          label: "Vietnamese Wedding Type",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Wedding Type in Vietnamese",
            }
          ]
        },
        {
          type: "string",
          name: "nationality",
          label: "Nationality",
        },
        {
          type: "object",
          name: "nationality_vi",
          label: "Vietnamese Nationality",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Nationality in Vietnamese",
            }
          ]
        },
        {
          type: "string",
          name: "location",
          label: "Location",
        },
        {
          type: "string",
          name: "season",
          label: "Season",
          options: ["Spring", "Summer", "Fall", "Winter"],
        }
      ]
    },
    {
      type: "object",
      name: "story_sections",
      label: "Story Sections",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true,
        },
        {
          type: "object",
          name: "title_vi",
          label: "Vietnamese Section Title",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Section Title in Vietnamese",
            }
          ]
        },
        {
          type: "string",
          name: "content",
          label: "Section Content",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "content_vi",
          label: "Vietnamese Section Content",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Section Content in Vietnamese",
              ui: {
                component: "textarea",
              },
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "gallery_images",
      label: "Gallery Images",
      list: true,
      fields: [
        {
          type: "image",
          name: "url",
          label: "Image",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Text",
        },
        {
          type: "string",
          name: "caption",
          label: "Caption",
        },
        {
          type: "string",
          name: "caption_vi",
          label: "Caption (Vietnamese)",
        }
      ]
    },
    {
      type: "object",
      name: "vendor_credits",
      label: "Vendor Credits",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Role/Category",
          required: true,
        },
        {
          type: "string",
          name: "vendor",
          label: "Vendor Name",
          required: true,
        },
        {
          type: "object",
          name: "vendor_vi",
          label: "Vietnamese Vendor Name",
          fields: [
            {
              type: "string",
              name: "value",
              label: "Vendor Name in Vietnamese",
            }
          ]
        },
        {
          type: "string",
          name: "website",
          label: "Website URL",
        }
      ]
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured on Homepage",
      description: "Show this wedding on the homepage carousel",
    },
    {
      type: "object",
      name: "seo",
      label: "SEO Settings",
      fields: [
        {
          type: "string",
          name: "meta_title",
          label: "Meta Title",
        },
        {
          type: "string",
          name: "meta_title_vi",
          label: "Meta Title (Vietnamese)",
        },
        {
          type: "string",
          name: "meta_description",
          label: "Meta Description",
        },
        {
          type: "string",
          name: "meta_description_vi",
          label: "Meta Description (Vietnamese)",
        }
      ]
    }
  ],
};

export default Journal;