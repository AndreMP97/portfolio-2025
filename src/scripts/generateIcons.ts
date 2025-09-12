// scripts/generateIcons.ts
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, "../assets/icons");
const outputDir = path.join(__dirname, "../components/Icon");

const toCamelCase = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

const toPascalCase = (str: string): string => {
  const camelCase = toCamelCase(str);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

const generateIcons = () => {
  try {
    // Read all SVG files from the assets/icons directory
    const files = fs.readdirSync(iconsDir);
    const svgFiles = files.filter((file) => file.endsWith(".svg"));

    if (svgFiles.length === 0) {
      console.log("❌ No SVG files found in assets/icons directory");
      return;
    }

    // Extract icon names (filename without extension)
    const iconNames = svgFiles.map((file) => path.basename(file, ".svg"));

    // Generate TypeScript types
    const typeDefinition = `// Auto-generated file - do not edit manually
export type TIconName = ${iconNames.map((name) => `'${name}'`).join(" | ")};

export type TIconProps = {
  className?: string;
  color?: string;
  iconName: TIconName;
  size?: number | string;
};
`;

    // Generate imports and icon map
    const imports = iconNames
      .map((name) => {
        const pascalName = toPascalCase(name);
        return `import ${pascalName}Icon from '@assets/icons/${name}.svg?react';`;
      })
      .join("\n");

    const iconMapEntries = iconNames
      .map((name) => {
        const pascalName = toPascalCase(name);
        return `  '${name}': ${pascalName}Icon,`;
      })
      .join("\n");

    const iconComponent = `// Auto-generated file - do not edit manually
import { TIconName, TIconProps } from "./types";

${imports}

const iconMap: Record<TIconName, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
${iconMapEntries}
} as const;

export const Icon: React.FC<TIconProps> = ({ 
  iconName, 
  size = 28, 
  color = 'currentColor',
  className = '',
  ...props 
}) => {
  const Icon = iconMap[iconName];

  return (
    <Icon
      {...props}
      className={\`shrink-0 \${className}\`.trim()}
      fill={color}
      height={size}
      width={size}
    />
  );
};
`;

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the files
    fs.writeFileSync(path.join(outputDir, "types.ts"), typeDefinition);
    fs.writeFileSync(path.join(outputDir, "index.tsx"), iconComponent);

    console.log(`✅ Generated Icon component with ${iconNames.length} icons:`);
    console.log(iconNames.join(", "));
    console.log("\nFiles generated:");
    console.log("- src/components/Icon/types.ts");
    console.log("- src/components/Icon/index.tsx");
  } catch (error) {
    console.error("❌ Error generating icons:", error);
  }
};

generateIcons();
