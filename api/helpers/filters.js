export function createFilter (technologies, searchQuery) {
  const techFilter = createTechnologyFilter(technologies)
  const searchFilter = createSearchFilter(searchQuery)
  return {
    where: {
      AND: [
        { ...techFilter },
        { ...searchFilter }
      ]
    }
  }
}

function createTechnologyFilter (technologies) {
  if (!technologies) { return {} }

  const filter = {
    OR: technologies.map(tech => ({
      infrastructure: {
        some: {
          text: {
            contains: tech
          }
        }
      }
    }))
  }

  return filter
}

function createSearchFilter (searchQuery) {
  if (!searchQuery) { return {} }

  const filter = {
    OR: [
      {
        content: {
          contains: searchQuery
        }
      },
      {
        title: {
          contains: searchQuery
        }
      }
    ]
  }

  return filter
}

export default { createFilter }
