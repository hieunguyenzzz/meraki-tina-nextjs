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
      name: "featured_image",
      label: "Featured Image",
      required: true,
    },
    {
      type: "object",
      name: "couple",
      label: "Couple Information",
      fields: [
        {
          type: "string",
          name: "bride_name",
          label: "Bride Name",
          required: true,
        },
        {
          type: "string",
          name: "groom_name", 
          label: "Groom Name",
          required: true,
        },
        {
          type: "string",
          name: "nationality",
          label: "Nationality",
        },
        {
          type: "number",
          name: "guest_count",
          label: "Guest Count",
        }
      ]
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
          type: "string",
          name: "venue_vi",
          label: "Venue (Vietnamese)",
        },
        {
          type: "string",
          name: "location",
          label: "Location",
          required: true,
        },
        {
          type: "string",
          name: "wedding_type",
          label: "Wedding Type",
          options: ["Destination Wedding", "Local Wedding", "Traditional Wedding", "Modern Wedding"],
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
      type: "rich-text",
      name: "story",
      label: "Wedding Story",
      description: "The story of the wedding in English",
    },
    {
      type: "rich-text", 
      name: "story_vi",
      label: "Wedding Story (Vietnamese)",
      description: "The story of the wedding in Vietnamese",
    },
    {
      type: "object",
      name: "gallery",
      label: "Wedding Gallery",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
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
          name: "role",
          label: "Role",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Vendor Name",
          required: true,
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