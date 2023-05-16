import * as Font from 'expo-font'

export function useLoadFonts () {
  const checkFontLoaded = async (fontFamily: string, resource: string) => {
    if (Font.isLoaded(fontFamily)) return

    return await Font.loadAsync({
      [fontFamily]: resource
    })
      .catch(error => error)
  }

  const loadFonts = async () => {
    try {
      await Promise.all([
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        checkFontLoaded('JosefinSans-Regular', require('../assets/fonts/JosefinSans-Regular.ttf')),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        checkFontLoaded('JosefinSans-Bold', require('../assets/fonts/JosefinSans-Bold.ttf'))
      ])

      return true
    } catch (error) {
      console.log('Error', error)
      return false
    }
  }

  return { loadFonts }
}
