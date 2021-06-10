export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c26eaf3f9308327d5cdde5",
                  title: "Sanity Studio",
                  name: "cassowary-studio",
                  apiId: "ac99370b-1ad2-4465-9be5-3285e81f2848",
                },
                {
                  buildHookId: "60c26eaf3f930836995cdd13",
                  title: "Blog Website",
                  name: "cassowary",
                  apiId: "dcb45e25-1dbf-4bde-96fb-fc5ee484c970",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jonathanyork/cassowary",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://cassowary.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
