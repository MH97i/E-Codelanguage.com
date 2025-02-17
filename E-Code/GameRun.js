function runGame() {
    const code = document.getElementById('code-editor').value;

    // ãÚÇáÌÉ ÇáßæÏ ÇáãßÊæÈ ãä ŞÈá ÇáãÓÊÎÏã
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = "<p>Running game...</p>";

    // åäÇ íãßääÇ ÅÖÇİÉ ÇáãäØŞ áÊäİíĞ ÇáßæÏ æÊÍæíáå Åáì áÚÈÉ ÊİÇÚáíÉ
    // ãáÇÍÙÉ: İí åĞå ÇáäÓÎÉ ÇáÃæáíÉ¡ ÓäÚÑÖ İŞØ ÇáäÕæÕ ßÅÌÑÇÁ ÊÌÑíÈí
    if (code.includes('Initialize Game')) {
        gameContainer.innerHTML = "<p>Game Initialized!</p>";
    } else {
        gameContainer.innerHTML = "<p>Invalid Code. Please check your syntax.</p>";
    }
}
