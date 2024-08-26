import express from 'express'

const app = express();

const videoYtbLazy = document.getElementById('videoYtb1970');

(videoYtbLazy as HTMLElement)?.addEventListener('click', snippetYtbLazyPlay);

function snippetYtbLazyPlay(evt: Event){
    const target = evt.currentTarget as HTMLElement;
    target.innerHTML = <iframe src="https://www.youtube.com/embed/${target.dataset.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;

}

app.listen(3333);

