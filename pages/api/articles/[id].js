import {articles} from '../../../data'



export default function handler({query: {id}}, res){
	//res.status(200).json(articles);

	const filtered = articles.filter(article => article.id === id)

	if(filtered.length > 0){
		res.status(200).json(filtered[0])
	}else{
		res.status(404).json({message: `article with id ${id} is not found`})
	}
}