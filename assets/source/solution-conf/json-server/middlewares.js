module.exports = (request, responce, next) => {
    if (request.method === 'POST') {
        request.method = 'GET';

        const replaceUrl = request.url.endWith('/') ? `${request.url}${request.body.id}` : `${request.url}/${request.url}/${request.body.id}`;

        if (request.url.startWith('/api')) {

        }

        if (request.url.startWith('/users') && request.body.id) {
            request.url = replaceUrl;
        }
    }

    next();
};
