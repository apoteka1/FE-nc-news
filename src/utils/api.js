import axios from "axios";

const newsApi = axios.create({
	baseURL: "https://nc-news-joe-ackroyd.herokuapp.com/api",
});

export function getTopicsList() {
	return newsApi.get("/topics").then((res) => {
		return res.data.topics;
	});
}

export function getArticlesList(queries) {
	return newsApi.get("/articles", { params: queries }).then((res) => {
		return res.data.articles;
	});
}

export function getArticle(id) {
	return newsApi.get(`/articles/${id}`).then((res) => {
		return res.data.article;
	});
}

export function getComments(id) {
	return newsApi.get(`/articles/${id}/comments`).then((res) => {
		return res.data.comments;
	});
}

export function addLike(id) {
	return newsApi.patch(`/articles/${id}`, { inc_votes: 1 }).then((res) => {
		return res.data;
	});
}

export function addComment(art_id, username, body) {
	return newsApi
		.post(`/articles/${art_id}/comments`, {
			username: username,
			body: body,
		})
		.then((res) => {
			return res.data.comment;
		});
}

export function deleteComment(id) {
	return newsApi.delete(`/comments/${id}`);
}

/*

app.get("/api/topics", getTopics); used

app.get("/api/articles", getArticles); used
app.get("/api/articles/:article_id", getArticleById); used
app.patch("/api/articles/:article_id", patchArticle); used 
app.get("/api/articles/:article_id/comments", getCommentsByArtId); used
app.post("/api/articles/:article_id/comments", postCommentByArtId);
app.delete("/api/comments/:comment_id", deleteCommentById);

*/
