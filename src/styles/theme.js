export const CustomTheme = {
    palette: {
        primary: {
            main: '#f44545',
        },
        secondary: {
            main: '#2076E4',
        },
        disabled: {
            main: '#B5B2B2',
        },
        colors: {
            black: {
                darkest: '#000000',
                dark: '#101010',
                light: '#7D7C7C',
                lighter: '#7C7D80'
            },
            grey: {
                dark: '#d5cece',
                light: '#E5E5E5',
                darker: '#8a9096',
                lighter: '#F0F0F0'
            },
            red: {
                dark: '#f44545',
                lighter: '#F49FA2'
            },
            green: {
                dark: '#308F34',
                light: '#63DA38',
                lighter: '#C5F2C780'
            },
            white: {
                light: '#F6FAFF',
                dark: '#d5e3f5',
                darker: '#ffffff'
            },
            blue: {
                light: '#18A0FB',
                lighter: '#F6FAFF',
                success: {
                    light: '#CFE4FC',
                },
                dark: '#32C5FF',
                darker: '#0000FF'
            },
            yellow: {
                dark: '#FFD42A'
            }
        }
    },
    card: {
        primary: {
            background: '#F6FAFF'
        }
    },
    typography: {
        fontFamily: `Open Sans`,
        fontSize: 22,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    app: {
        primary: {
            backgroundColor: '#f2f2f2',
            color: '#333'
        }
    },
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1.5rem',
            },
          },
        },
      },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1775,
        },
    }
}