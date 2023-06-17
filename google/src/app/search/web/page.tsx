type Params = {
  params: {
    searchTerm: string
  }
}

interface Result {
  title: string
}

interface Results {
  items: Result[]
}

export default async function WebSearchPage({
  params: { searchTerm },
}: Params) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`,
  )

  console.log(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`,
  )

  const data = (await response.json()) as Results

  const results = data.items

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </>
  )
}
