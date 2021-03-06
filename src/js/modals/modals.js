import tingle from 'tingle.js';

export default function (cssClass, content, onClose, onOpen = function () {
}) {
    // eslint-disable-next-line new-cap
    let modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: '',
        cssClass: [cssClass],
        onOpen: onOpen,
        onClose: onClose
    });
    modal.setContent(content);
    console.log(modal.isOverflow());
    return modal;
}