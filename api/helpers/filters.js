export function createFilter (technologies) {
  const filter = technologies.map(tech => ({
    infrastructure: {
      some: {
        text: {
          contains: tech
        }
      }
    }
  }))

  return {
    where: {
      OR: filter
    }
  }
}

export default { createFilter }
