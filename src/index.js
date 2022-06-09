class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name) {
                throw new Error();
            }
        }
        board.check = true;
        this.boards.push(board);
    }

    findBoardByName(boardName) {
        return this.boards.find((board) => board.name === boardName);
    }
}

class Board {
    constructor(boardName) {
        if (boardName === null) {
            throw new Error();
        } else if (boardName === '') {
            throw new Error();
        }
        this.name = boardName;
        this.check = false;
        this.article = [];
    }

    publish(article) {
        const date = new Date();
        article.createdDate = date.toISOString();
        article.id = `${this.name}-${Math.random()}`;

        if (this.check === false) {
            throw new Error();
        }
        article.check = true;
        this.article.push(article);
    }

    getAllArticles() {
        return this.article;
    }
}

class Article {
    constructor(article) {
        if (article.subject === null || '') {
            throw new Error();
        } else if (article.content === null || '') {
            throw new Error();
        } else if (article.author === null || '') {
            throw new Error();
        }

        this.subject = article.subject;
        this.content = article.content;
        this.author = article.author;
        this.comment = [];
        this.check = false;
    }

    reply(comment) {
        const date = new Date();
        comment.createdDate = date.toISOString();
        comment.id = `${this.name}-${Math.random()}`;

        if (this.check === false) {
            throw new Error();
        }

        this.comment.push(comment);
    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(Comment) {
        if (Comment.content === null || '') {
            throw new Error();
        } else if (Comment.author === null || '') {
            throw new Error();
        }

        this.content = Comment.content;
        this.author = Comment.author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};