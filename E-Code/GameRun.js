function runGame() {
    const code = document.getElementById('code-editor').value;

    // ������ ����� ������� �� ��� ��������
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = "<p>Running game...</p>";

    // ��� ������ ����� ������ ������ ����� ������� ��� ���� �������
    // ������: �� ��� ������ ������ɡ ����� ��� ������ ������ ������
    if (code.includes('Initialize Game')) {
        gameContainer.innerHTML = "<p>Game Initialized!</p>";
    } else {
        gameContainer.innerHTML = "<p>Invalid Code. Please check your syntax.</p>";
    }
}
