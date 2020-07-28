import React, { PureComponent } from 'react';

class WeatherWidget extends PureComponent {

render() {
    return (
        <div className={this.props.className || ""}>            
            <a className="weatherwidget-io" href="https://forecast7.com/en/n33d87151d21/sydney/" data-label_1="SYDNEY" data-label_2="WEATHER" data-theme="original" >SYDNEY WEATHER</a>
            {!function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                // if (!d.getElementById(id)) {
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https:weatherwidget.io/js/widget.min.js';
                    fjs.parentNode.insertBefore(js, fjs);
                // }
            }
                (document, 'script', 'weatherwidget-io-js')
            }

        </div>
    )
}};

export default WeatherWidget;