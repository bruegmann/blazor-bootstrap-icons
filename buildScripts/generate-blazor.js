/**
 * Takes SVG files from folders and transforms them to Blazor components.
 */

const path = require("path")
const fs = require("fs")
const upperCamelCase = require("uppercamelcase")

const rootDir = path.join(__dirname, "..")

const iconsDirs = [
    path.join(rootDir, "node_modules", "bootstrap-icons", "icons")
]

const dir = path.join(rootDir, "Components")

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}

const prefix = "bi"

let n = 0

for (const iconsDir of iconsDirs) {
    fs.readdirSync(iconsDir).forEach((file) => {
        const svg = fs.readFileSync(`${iconsDir}/${file}`, "utf8")

        console.log(`${iconsDir}/${file}`)

        const fileName = file.split(".")[0]
        const ComponentName = upperCamelCase(prefix + "_" + fileName)
        const svgContent = svg
            .replace(`<?xml version="1.0" encoding="UTF-8"?>`, "")
            .replace(
                `<?xml version="1.0" encoding="UTF-8" standalone="no"?>`,
                ""
            )
            .replace(
                `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`,
                ""
            )
            .replace(/(<title>).*(<\/title>)/gm, "")
            .replace(/(<title>).*(<\/title>)/gm, "")
            .replace(/(<desc>).*(<\/desc>)/gm, "")
            .replace(/<svg[^>]*>|<\/svg>/g, "")
            .replace(/serif:id="(.*?)"/g, "")
            .replace(/id="(.*?)"/g, "")
            .replace(/<path  /g, "<path ")
            .replace(/\t/g, "    ")
            .trim()

        const component = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="@Class" width="@Size" height="@Size"
     fill="@Color" @attributes="AdditionalAttributes">
    ${svgContent}
</svg>

@code {
    [Parameter]
    public string Class { get; set; } = "bi bi-${fileName}";

    [Parameter]
    public string Color { get; set; } = "currentColor";

    [Parameter]
    public string Size { get; set; } = "1em";

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }
}`

        fs.writeFileSync(
            path.join(dir, `${ComponentName}.razor`),
            component,
            "utf-8"
        )

        console.log(`${ComponentName} was created.`)
        n++
    })
}

console.log(`\nSuccess! ${n} icons were created.`)
