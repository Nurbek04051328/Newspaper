export interface IImdbMoviesResponse {
  titles: IMovie[]
}

interface IMovie {
  id: string
  primaryTitle: string
  rating?: {
    aggregateRating: string
  }
}