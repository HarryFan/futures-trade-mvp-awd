import { ref, onMounted, onUnmounted } from 'vue'

const breakpoints = {
  mobile: 640,
  tablet: 960,
  desktop: 1280,
  large: 1600,
}

export function useDeviceLayout() {
  const deviceType = ref('desktop')

  const updateDeviceType = () => {
    const width = window.innerWidth
    if (width < breakpoints.mobile) deviceType.value = 'mobile'
    else if (width < breakpoints.tablet) deviceType.value = 'tablet'
    else if (width < breakpoints.desktop) deviceType.value = 'desktop'
    else deviceType.value = 'large'
  }

  onMounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDeviceType)
  })

  return { deviceType }
}
