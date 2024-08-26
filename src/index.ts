import * as express from 'express'

const app = express();

const videoYtbLazy = document.getElementById('videoYtb1970');

videoYtbLazy.addEventListener('click', snippetYtbLazyPlay);

function snippetYtbLazyPlay(evt: Event){
    evt.currentTarget.removeEventListener('click', snippetYtbLazyPlay);

    evt.currentTarget.innerHTML = `<iframe src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
      picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

app.listen(3333);

