# Blazor Bootstrap Icons

Use the [Bootstrap Icons library](https://icons.bootstrap.com) as Blazor components. This solution is inspired by [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons).

## Installation

```
dotnet add package Blazor.Bootstrap.Icons
```

[![Nuget](https://img.shields.io/nuget/v/Blazor.Bootstrap.Icons)](https://www.nuget.org/packages/Blazor.Bootstrap.Icons/)

## Usage

```razor
@using Blazor.Bootstrap.Icons.Components

<BiArrowRight />
```

To make icons available globally in your project, you can add `@using Blazor.Bootstrap.Icons.Components` to your `_Imports.razor` file.

The icon names are the `PascalCase` version of the original name. To avoid conflicts with any other components in your project, all component names start with the prefix `Bi`.

## Parameters

| Attribute | Default value                                  |
| --------- | ---------------------------------------------- |
| `Class`   | `"bi bi-"` + icon name (e.g. `bi-arrow-right`) |
| `Color`   | `"currentColor"`\                              |
| `Size`    | `"1em"`                                        |

You can add any other attribute like `title`, it will be attached to the SVG element.

## More options

Other ways to use Bootstrap Icons: [https://icons.getbootstrap.com/#usage](https://icons.getbootstrap.com/#usage)

## License

-   Blazor Bootstrap Icons are open-sourced ([MIT](https://github.com/bruegmann/blazor-bootstrap-icons/blob/main/LICENSE))
-   react-bootstrap-icons are open-sourced ([MIT](https://github.com/ismamz/react-bootstrap-icons/blob/master/LICENSE.md))
-   Bootstrap Icons are open-sourced ([MIT](https://github.com/twbs/icons/blob/main/LICENSE))
