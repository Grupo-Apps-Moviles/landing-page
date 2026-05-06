tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary-container": "#c8daff",
                "secondary": "#1b6d24",
                "primary-fixed-dim": "#a9c7ff",
                "on-tertiary-fixed-variant": "#004e59",
                "surface-container-lowest": "#ffffff",
                "on-tertiary": "#ffffff",
                "on-primary-fixed": "#001b3d",
                "surface-tint": "#005db6",
                "on-secondary-fixed": "#002204",
                "surface-container": "#ebefed",
                "on-tertiary-container": "#74eaff",
                "on-tertiary-fixed": "#001f24",
                "secondary-fixed": "#a3f69c",
                "on-surface": "#181c1b",
                "outline-variant": "#c2c6d4",
                "inverse-on-surface": "#eef1ef",
                "inverse-surface": "#2d3130",
                "on-primary-fixed-variant": "#00468c",
                "tertiary": "#004f5a",
                "on-secondary-container": "#217128",
                "surface-container-high": "#e6e9e7",
                "on-surface-variant": "#424752",
                "background": "#f7faf8",
                "secondary-fixed-dim": "#88d982",
                "on-error-container": "#93000a",
                "on-secondary": "#ffffff",
                "surface-dim": "#d7dbd9",
                "tertiary-fixed-dim": "#55d7ed",
                "inverse-primary": "#a9c7ff",
                "surface-bright": "#f7faf8",
                "tertiary-container": "#006976",
                "primary-fixed": "#d6e3ff",
                "primary-container": "#005eb8",
                "outline": "#727783",
                "on-secondary-fixed-variant": "#005312",
                "surface-variant": "#e0e3e1",
                "error": "#ba1a1a",
                "on-background": "#181c1b",
                "on-primary": "#ffffff",
                "secondary-container": "#a0f399",
                "error-container": "#ffdad6",
                "surface-container-low": "#f1f4f2",
                "on-error": "#ffffff",
                "tertiary-fixed": "#9eefff",
                "primary": "#00478d",
                "surface": "#f7faf8",
                "surface-container-highest": "#e0e3e1"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "stack-lg": "32px",
                "container-margin": "24px",
                "unit": "8px",
                "stack-sm": "8px",
                "gutter": "16px",
                "stack-md": "16px"
            },
            "fontFamily": {
                "body-lg": ["Inter"],
                "label-sm": ["Inter"],
                "headline-lg": ["Inter"],
                "label-lg": ["Inter"],
                "body-md": ["Inter"],
                "headline-md": ["Inter"]
            },
            "fontSize": {
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "headline-md": ["24px", {"lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }
        }
    }
};