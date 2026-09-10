import './style.css'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function initTheme() {
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })()

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle')
  if (!toggle) return

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark')
    const newTheme = isDark ? 'light' : 'dark'

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme)
  })
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  if (!btn || !menu) return

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!isExpanded))
    menu.classList.toggle('hidden')
  })
}

function initSwiper() {
  const el = document.querySelector('.projects-swiper')
  if (!el) return

  new Swiper('.projects-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 4,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
    },
  })
}

initTheme()
initThemeToggle()
initMobileMenu()
initSwiper()
