const config = defineConfig({
    globalCss: {
        html: {
            colorPalette: "blue", // Change this to any color palette you prefer
        },
    },
})

export const system = createSystem(defaultConfig, config)