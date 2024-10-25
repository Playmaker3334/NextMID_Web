(function(){
    emailjs.init('YHOs5iqu-jzJL7m7i');
})();



// Function to send email using EmailJS
    const _0x3f4b05 = _0x3c78;

    function _0x3c78(_0x11e2f9, _0x3a499c) {
        const _0x8ab550 = _0x8ab5();
        return _0x3c78 = function (_0x3c7853, _0x5ba0b0) {
            _0x3c7853 = _0x3c7853 - 0x119;
            let _0x17187f = _0x8ab550[_0x3c7853];
            return _0x17187f;
        }, _0x3c78(_0x11e2f9, _0x3a499c);
    }

    (function (_0x5c9c78, _0x466bae) {
        const _0x373b0d = _0x3c78,
            _0x9707e4 = _0x5c9c78();
        while (!![]) {
            try {
                const _0x167464 = -parseInt(_0x373b0d(0x12e)) / 0x1 +
                                parseInt(_0x373b0d(0x126)) / 0x2 * (parseInt(_0x373b0d(0x11a)) / 0x3) +
                                parseInt(_0x373b0d(0x132)) / 0x4 * (-parseInt(_0x373b0d(0x131)) / 0x5) +
                                parseInt(_0x373b0d(0x123)) / 0x6 * (-parseInt(_0x373b0d(0x135)) / 0x7) +
                                parseInt(_0x373b0d(0x136)) / 0x8 * (-parseInt(_0x373b0d(0x127)) / 0x9) +
                                parseInt(_0x373b0d(0x121)) / 0xa * (-parseInt(_0x373b0d(0x133)) / 0xb) +
                                parseInt(_0x373b0d(0x119)) / 0xc * (parseInt(_0x373b0d(0x11d)) / 0xd);
                if (_0x167464 === _0x466bae) break;
                else _0x9707e4['push'](_0x9707e4['shift']());
            } catch (_0x940849) {
                _0x9707e4['push'](_0x9707e4['shift']());
            }
        }
    }(_0x8ab5, 0x76c37));

    function sendEmail(_0x24558b, _0x1595e7, _0x214262) {
        const _0x3d09a2 = _0x3c78;
        _0x1595e7[_0x3d09a2(0x12b)] = _0x3d09a2(0x12f);
        const _0x1896d0 = _0x3d09a2(0x11c),
            _0x4ad95b = 'template_gpmxphd',
            _0x3606a5 = _0x24558b[_0x3d09a2(0x134)](_0x3d09a2(0x124))[_0x3d09a2(0x130)],
            _0x56c91b = { 'to_email': _0x3606a5 };

        emailjs['send'](_0x1896d0, _0x4ad95b, _0x56c91b)
            [_0x3d09a2(0x11b)](() => {
                const _0x42006d = _0x3d09a2;
                _0x1595e7[_0x42006d(0x12b)] = _0x42006d(0x122);
                _0x214262[_0x42006d(0x12c)] = _0x42006d(0x12a);
            }, _0x539cbd => {
                const _0x3b82ff = _0x3d09a2;
                _0x1595e7['textContent'] = _0x3b82ff(0x122);
                _0x214262[_0x3b82ff(0x12c)] = '<p>Error:\x20' + JSON['stringify'](_0x539cbd) + '</p>';
            });
    }

    const footerForm = document['getElementById'](_0x3f4b05(0x12d)),
        footerMessage = document[_0x3f4b05(0x11f)](_0x3f4b05(0x129)),
        footerButton = footerForm[_0x3f4b05(0x134)](_0x3f4b05(0x128));

    footerForm[_0x3f4b05(0x120)](_0x3f4b05(0x11e), function (_0x240b13) {
        const _0x4a558f = _0x3f4b05;
        _0x240b13[_0x4a558f(0x125)]();
        sendEmail(footerForm, footerButton, footerMessage);
    });

    function _0x8ab5() {
        const _0x3d3822 = [
            'default_service', '28626gpXsJE', 'submit', 'getElementById', 'addEventListener',
            '420WFYcfZ', 'Get\x20Started', '258924eMQLmI', 'input[name=\x22email\x22]', 'preventDefault',
            '2NINreS', '180BhZZsY', 'button', 'footer-message', '<p>Subscription\x20successful!</p>',
            'textContent', 'innerHTML', 'footer-form', '150541xFYXsH', 'Sending...', 'value', '545015QoCRKf',
            '28VEsRFq', '107283JzGnaA', 'querySelector', '49zgoVwY', '345328XgkRhi', '13044GGhjvk', '1744401haDLYc',
            'then'
        ];
        _0x8ab5 = function () {
            return _0x3d3822;
        };
        return _0x8ab5();
    }

//this code hasn't been ofuscated, im still working with it.