import React from 'react';
import { videoBlockSchema } from '@/components/blocks/video';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Collection } from 'tinacms';

const Blog: Collection = {
  label: 'Blog Posts',
  name: 'blog',
  path: 'content/blog',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/en/blog/${document._sys.breadcrumbs.join('/')}`;
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title (English)',
      name: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      label: 'Title (Vietnamese)',
      name: 'title_vi',
    },
    {
      type: 'string',
      label: 'Slug',
      name: 'slug',
      required: true,
    },
    {
      type: 'image',
      name: 'heroImg',
      label: 'Hero Image',
      // @ts-ignore
      uploadDir: () => 'blog',
    },
    {
      type: 'rich-text',
      label: 'Excerpt (English)',
      name: 'excerpt',
      overrides: {
        toolbar: ['bold', 'italic', 'link'],
      },
    },
    {
      type: 'rich-text',
      label: 'Excerpt (Vietnamese)',
      name: 'excerpt_vi',
      overrides: {
        toolbar: ['bold', 'italic', 'link'],
      },
    },
    {
      type: 'reference',
      label: 'Author',
      name: 'author',
      collections: ['author'],
      ui: {
        //@ts-ignore
        optionComponent: (
          props: {
            name?: string;
            avatar: string;
          },
          _internalSys: { path: string }
        ) => {
          const { name, avatar } = props;
          if (!name) return _internalSys.path;

          return (
            <p className='flex min-h-8 items-center gap-4'>
              <Avatar>
                {avatar && <AvatarImage src={avatar} alt={`${name} Profile`} />}
                <AvatarFallback>
                  {name
                    .split(' ')
                    .map((part) => part[0]?.toUpperCase() || '')
                    .join('')}
                </AvatarFallback>
              </Avatar>
              {name}
            </p>
          );
        },
      },
    },
    {
      type: 'datetime',
      label: 'Posted Date',
      name: 'date',
      ui: {
        dateFormat: 'MMMM DD YYYY',
        timeFormat: 'hh:mm A',
      },
    },
    {
      type: 'object',
      label: 'Categories',
      name: 'categories',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Category',
          name: 'category',
          options: [
            'Wedding Planning',
            'Wedding Trends',
            'Venue Selection',
            'Wedding Photography',
            'Wedding Decor',
            'Destination Weddings',
            'Traditional Weddings',
            'Company News'
          ],
        },
      ],
    },
    {
      type: 'object',
      label: 'Tags',
      name: 'tags',
      list: true,
      fields: [
        {
          type: 'reference',
          label: 'Tag',
          name: 'tag',
          collections: ['tag'],
          ui: {
            optionComponent: (
              props: {
                name?: string;
              },
              _internalSys: { path: string }
            ) => props.name || _internalSys.path,
          },
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: item?.tag };
        },
      },
    },
    {
      type: 'rich-text',
      label: 'Body (English)',
      name: '_body',
      templates: [
        {
          name: 'BlockQuote',
          label: 'Block Quote',
          fields: [
            {
              name: 'children',
              label: 'Quote',
              type: 'rich-text',
              overrides: {
                toolbar: ['bold', 'italic', 'link'],
              },
            },
            {
              name: 'authorName',
              label: 'Author',
              type: 'string',
            },
          ],
        },
        {
          name: 'DateTime',
          label: 'Date & Time',
          inline: true,
          fields: [
            {
              name: 'format',
              label: 'Format',
              type: 'string',
              options: ['utc', 'iso', 'local'],
            },
          ],
        },
        {
          name: 'NewsletterSignup',
          label: 'Newsletter Sign Up',
          fields: [
            {
              name: 'children',
              label: 'CTA',
              type: 'rich-text',
            },
            {
              name: 'placeholder',
              label: 'Placeholder',
              type: 'string',
            },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'string',
            },
            {
              name: 'disclaimer',
              label: 'Disclaimer',
              type: 'rich-text',
              overrides: {
                toolbar: ['bold', 'italic', 'link'],
              },
            },
          ],
          ui: {
            defaultItem: {
              placeholder: 'Enter your email',
              buttonText: 'Notify Me',
            },
          },
        },
        videoBlockSchema,
      ],
      isBody: true,
    },
    {
      type: 'rich-text',
      label: 'Body (Vietnamese)',
      name: '_body_vi',
      templates: [
        {
          name: 'BlockQuote',
          label: 'Block Quote',
          fields: [
            {
              name: 'children',
              label: 'Quote',
              type: 'rich-text',
              overrides: {
                toolbar: ['bold', 'italic', 'link'],
              },
            },
            {
              name: 'authorName',
              label: 'Author',
              type: 'string',
            },
          ],
        },
        {
          name: 'DateTime',
          label: 'Date & Time',
          inline: true,
          fields: [
            {
              name: 'format',
              label: 'Format',
              type: 'string',
              options: ['utc', 'iso', 'local'],
            },
          ],
        },
        {
          name: 'NewsletterSignup',
          label: 'Newsletter Sign Up',
          fields: [
            {
              name: 'children',
              label: 'CTA',
              type: 'rich-text',
            },
            {
              name: 'placeholder',
              label: 'Placeholder',
              type: 'string',
            },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'string',
            },
            {
              name: 'disclaimer',
              label: 'Disclaimer',
              type: 'rich-text',
              overrides: {
                toolbar: ['bold', 'italic', 'link'],
              },
            },
          ],
          ui: {
            defaultItem: {
              placeholder: 'Nhập email của bạn',
              buttonText: 'Thông báo cho tôi',
            },
          },
        },
        videoBlockSchema,
      ],
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          type: 'string',
          name: 'meta_title',
          label: 'Meta Title (English)',
        },
        {
          type: 'string',
          name: 'meta_title_vi',
          label: 'Meta Title (Vietnamese)',
        },
        {
          type: 'string',
          name: 'meta_description',
          label: 'Meta Description (English)',
        },
        {
          type: 'string',
          name: 'meta_description_vi',
          label: 'Meta Description (Vietnamese)',
        }
      ]
    }
  ],
};

export default Blog;