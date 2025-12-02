class Home {
    static element = document.querySelector(".start");
    static dom;

    static addEvent() {
        Home.element.addEventListener("click", () => {
            Window.append();
            Window.setOn();
            Home.element.remove();
        })
    }
}