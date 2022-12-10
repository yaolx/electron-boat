interface CategoryItem {
  title: string
  url: string
  id?: string
}

interface Categories {
  name: string
  children: CategoryItem[]
}

interface Menu {
  title: string
  key: string
  url?: string
  icon: string
}
