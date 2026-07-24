import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sparklingwhitedental.com.au/locations/family-dentist-in-goondiwindi/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
