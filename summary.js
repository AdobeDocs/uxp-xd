module.exports = [
  {
    title: "Develop",
    path: "/develop/",
    header: true,
    pages: [
      {
        title: "Overview",
        path: "/develop/",
      },
      {
        title: "Plugin Development",
        path: "/develop/plugin-development/",
        header: true,
        pages: [
          {
            title: "Plugin Structure",
            path: "/develop/plugin-development/plugin-structure/",
            header: true,
            pages: [
              {
                path: "/develop/plugin-development/plugin-structure/location/",
                title: "Location",
              },
              {
                path:
                  "/develop/plugin-development/plugin-structure/folder-structure/",
                title: "Folder Structure",
              },
              {
                path: "/develop/plugin-development/plugin-structure/manifest/",
                title: "Manifest",
              },
              {
                path: "/develop/plugin-development/plugin-structure/handlers/",
                title: "Handlers",
              },
              {
                path:
                  "/develop/plugin-development/plugin-structure/menu-structure/",
                title: "Menu Structure",
              },
            ],
          },
          {
            title: "JavaScript and XD",
            path: "/develop/plugin-development/javascript-and-xd/",
            header: true,
            pages: [
              {
                path:
                  "/develop/plugin-development/javascript-and-xd/environment/",
                title: "Environment",
              },
              {
                path:
                  "/develop/plugin-development/javascript-and-xd/javascript-support/",
                title: " JavaScript Support",
              },
              {
                path:
                  "/develop/plugin-development/javascript-and-xd/sync-async/",
                title: "Sync Async",
              },
            ],
          },
          {
            title: "XD Concepts",
            path: "/develop/plugin-development/xd-concepts/",
            header: true,
            pages: [
              {
                path: "/develop/plugin-development/xd-concepts/lifecycle/",
                title: "Lifecycle",
              },
              {
                path: "/develop/plugin-development/xd-concepts/scenegraph/",
                title: "Scenegraph",
              },
              {
                path: "/develop/plugin-development/xd-concepts/edit-context/",
                title: "Edit Context",
              },
              {
                path:
                  "/develop/plugin-development/xd-concepts/properties-with-object-values/",
                title: "Properties With Object Values",
              },
              {
                path:
                  "/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/",
                title: "Coordinate Spaces And Units",
              },
              {
                path:
                  "/develop/plugin-development/xd-concepts/automatic-cleanups/",
                title: "Automatic Cleanups",
              },
              {
                path: "/develop/plugin-development/xd-concepts/apis/",
                title: "Apis",
              },
            ],
          },
          {
            title: "Developer Tool",
            path: "/develop/plugin-development/devtool/",
            header: true,
            pages: require("./reference-devtool.js")
          },
          {
            title: "Best Practices",
            path: "/develop/plugin-development/devbestpractices/",
            header: true,
            pages: [
              {
                path: "/develop/plugin-development/devbestpractices/intro/",
                title: "Introduction",
              },
              {
                path:
                  "/develop/plugin-development/devbestpractices/1-performance/",
                title: "Performance",
              },
              {
                path:
                  "/develop/plugin-development/devbestpractices/2-scenegraph/",
                title: "Scenegraph",
              },
              {
                path:
                  "/develop/plugin-development/devbestpractices/3-network-io/",
                title: "Network IO",
              },
              {
                path: "/develop/plugin-development/devbestpractices/4-file-io/",
                title: "File IO",
              },
              {
                path: "/develop/plugin-development/devbestpractices/5-ui/",
                title: "User Interface",
              },
            ],
          },
        ],
      },
      {
        title: "Tutorials",
        path: "/develop/tutorials/",
        header: true,
        pages: [
          {
            title: "Quick Start",
            path: "/develop/tutorials/quick-start/",
          },
          {
            title: "Quick Start Panel",
            path: "/develop/tutorials/quick-start-panel/",
          },
          {
            title: "Quick Start React",
            path: "/develop/tutorials/quick-start-react/",
          },
          {
            title: "Debugging",
            path: "/develop/tutorials/debugging/",
          },
          {
            title: "How To Ask User For Confirmation",
            path: "/develop/tutorials/how-to-ask-user-for-confirmation/",
          },
          {
            title: "How To Create Paths",
            path: "/develop/tutorials/how-to-create-paths/",
          },
          {
            title: "How To Draw Lines",
            path: "/develop/tutorials/how-to-draw-lines/",
          },
          {
            title: "How To Export A Rendition",
            path: "/develop/tutorials/how-to-export-a-rendition/",
          },
          {
            title: "How To Integrate With OAuth",
            path: "/develop/tutorials/how-to-integrate-with-OAuth/",
          },
          {
            title: "How To Make Network Requests",
            path: "/develop/tutorials/how-to-make-network-requests/",
          },
          {
            title: "How To Read A File",
            path: "/develop/tutorials/how-to-read-a-file/",
          },
          {
            title: "How To Show An Alert",
            path: "/develop/tutorials/how-to-show-an-alert/",
          },
          {
            title: "How To Style Text",
            path: "/develop/tutorials/how-to-style-text/",
          },
          {
            title: "How To Work With Scenenodelist",
            path: "/develop/tutorials/how-to-work-with-scenenodelist/",
          },
        ],
      },
      /*{
        "title": "Guides",
        "path": "/develop/guides/",
        "header": true,
        "pages": [
          {
            path: "/develop/devbestpractices/intro/",
            title: "Introduction",
          },
          {
            "title": "UXP Developer Tool",
            "path": "/develop/guides/uxp-developer-tool/"
          },
          {
            "title": "UXP Misc",
            "path": "/develop/guides/uxp-misc/",
            "header": true,
            "pages": [
              {
                "title": "File Access",
                "path": "/develop/guides/uxp-misc/file-access/"
              },
              {
                "title": "Flyout Menus",
                "path": "/develop/guides/uxp-misc/flyout-menus/"
              },
              {
                "title": "Localization And Platforms",
                "path": "/develop/guides/uxp-misc/localization-and-platforms/"
              },
              {
                "title": "Manifest V4",
                "path": "/develop/guides/uxp-misc/manifest-v4/"
              },
              {
                "title": "Network IO",
                "path": "/develop/guides/uxp-misc/network-io/"
              },
              {
                "title": "Plugin Icons",
                "path": "/develop/guides/uxp-misc/plugin-icons/"
              },
              {
                "title": "Spectrum Css",
                "path": "/develop/guides/uxp-misc/spectrum-css/"
              }
            ]
          }
        ]
      },*/
      {
        title: "Reference",
        path: "/develop/reference/",
        header: true,
        pages: [
          {
            path: "/develop/reference/AngularGradient/",
            title: "AngularGradient",
          },
          {
            path: "/develop/reference/application/",
            title: "Application",
          },
          {
            path: "/develop/reference/Artboard/",
            title: "Artboard",
          },
          {
            path: "/develop/reference/assets/",
            title: "Assets",
          },
          {
            path: "/develop/reference/Blur/",
            title: "Blur",
          },
          {
            path: "/develop/reference/BooleanGroup/",
            title: "BooleanGroup",
          },
          {
            path: "/develop/reference/clipboard/",
            title: "Clipboard",
          },
          {
            path: "/develop/reference/cloud/",
            title: "Cloud",
          },
          {
            path: "/develop/reference/Color/",
            title: "Color",
          },
          {
            path: "/develop/reference/commands/",
            title: "Commands",
          },
          {
            path: "/develop/reference/Ellipse/",
            title: "Ellipse",
          },
          {
            path: "/develop/reference/GraphicNode/",
            title: "GraphicNode",
          },
          {
            path: "/develop/reference/Group/",
            title: "Group",
          },
          {
            path: "/develop/reference/ImageFill/",
            title: "ImageFill",
          },
          {
            path: "/develop/reference/InnerShadow/",
            title: "InnerShadow",
          },
          {
            path: "/develop/reference/interactions/",
            title: "Interactions",
          },
          {
            path: "/develop/reference/Line/",
            title: "Line",
          },
          {
            path: "/develop/reference/LinearGradient/",
            title: "LinearGradient",
          },
          {
            path: "/develop/reference/LinkedGraphic/",
            title: "LinkedGraphic",
          },
          {
            path: "/develop/reference/Matrix/",
            title: "Matrix",
          },
          {
            path: "/develop/reference/Matrix3D/",
            title: "Matrix3D",
          },
          {
            path: "/develop/reference/Path/",
            title: "Path",
          },
          {
            path: "/develop/reference/PerPluginStorage/",
            title: "PerPluginStorage",
          },
          {
            path: "/develop/reference/Polygon/",
            title: "Polygon",
          },
          {
            path: "/develop/reference/RadialGradient/",
            title: "RadialGradient",
          },
          {
            path: "/develop/reference/Rectangle/",
            title: "Rectangle",
          },
          {
            path: "/develop/reference/RepeatGrid/",
            title: "RepeatGrid",
          },
          {
            path: "/develop/reference/RootNode/",
            title: "RootNode",
          },
          {
            path: "/develop/reference/scenegraph/",
            title: "Scenegraph",
          },
          {
            path: "/develop/reference/SceneNode/",
            title: "SceneNode",
          },
          {
            path: "/develop/reference/SceneNodeList/",
            title: "SceneNodeList",
          },
          {
            path: "/develop/reference/ScrollableGroup/",
            title: "ScrollableGroup",
          },
          {
            path: "/develop/reference/selection/",
            title: "Selection",
          },
          {
            path: "/develop/reference/Shadow/",
            title: "Shadow",
          },
          {
            path: "/develop/reference/SymbolInstance/",
            title: "SymbolInstance",
          },
          {
            path: "/develop/reference/Text/",
            title: "Text",
          },
          {
            path: "/develop/reference/viewport/",
            title: "Viewport",
          },
          /*{
            "title": "UI",
            "path": "/develop/reference/ui/",
            "header": true,
            "pages": [
              {
                title: "Dialogs",
                path: "/develop/reference/ui/dialogs/",
                header: true,
                pages: [
                  {
                    path: "/develop/reference/ui/dialogs/dismissal/",
                    title: "Dismissal",
                  },
                  {
                    path: "/develop/reference/ui/dialogs/showing/",
                    title: "Showing",
                  },
                ],
              },
              {
                title: "Panels",
                path: "/develop/reference/ui/panels/",
                header: true,
                pages: [
                  {
                    path: "/develop/reference/ui/panels/hide/",
                    title: "Hide",
                  },
                  {
                    path: "/develop/reference/ui/panels/show/",
                    title: "Show",
                  },
                  {
                    "path": "/develop/reference/ui/panels/update/",
                    "title": "Update"
                  }
                ]
              }
            ]
          },*/
        ],
      },
      {
        path: "/develop/changelog/",
        title: "Changelog",
      },
      {
        path: "/develop/known-issues/",
        title: "Known Issues",
      },
    ],
  },
  /*{
    "title": "Developer Tool",
    "path": "/devtool/",
    "header": true,
    "pages": [
      {
        title: "Distribution Options",
        path: "/distribution/distribution-options/",
      },
      {
        title: "Marketing",
        path: "/distribution/marketing/",
      },
      {
        title: "Packaging Your Plugin",
        path: "/distribution/packaging-your-plugin/",
      },
      {
        "path": "/devtool/working-with-react/",
        "title": "Working With React"
      }
    ]
  },*/
  {
    title: "Design",
    path: "/design/",
    header: true,
    pages: [
      {
        title: "User Interface",
        path: "/design/user-interface/",
      },
      {
        title: "UX Patterns",
        path: "/design/ux-patterns/",
        header: true,
        pages: [
          {
            path: "/design/ux-patterns/branding/",
            title: "Branding",
          },
          {
            path: "/design/ux-patterns/messaging/",
            title: "Messaging",
          },
          {
            path: "/design/ux-patterns/modal-ux/",
            title: "Modal UX",
          },
          {
            path: "/design/ux-patterns/navigation/",
            title: "Navigation",
          },
          {
            path: "/design/ux-patterns/onboarding/",
            title: "Onboarding",
          },
          {
            path: "/design/ux-patterns/panel-ux/",
            title: "Panel UX",
          },
        ],
      },
    ],
  },
  {
    title: "Distribution",
    path: "/distribution/",
    header: true,
    pages: [
      {
        title: "Packaging Your Plugin",
        path: "/distribution/packaging-your-plugin/",
      },
      {
        title: "Distribution Options",
        path: "/distribution/distribution-options/",
      },
      {
        title: "Submission and Review",
        path: "/distribution/submission-checklist/",
      },
      {
        title: "Marketing Your Plugin",
        path: "/distribution/marketing/",
      },
      {
        title: "Creating Deep Links",
        path: "/distribution/deep-links/",
      },
    ],
  },
  {
    title: "Community",
    path: "/community/",
  },
];
