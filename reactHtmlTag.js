// 2020.7/10. am 8:00
// html tag & react class name
// Choice has a RadioInput, RadioInput has a Input
// Bottom Up

var React = require("react");
var PropsTypes = require("prop-types");

// what value
// description
// id is optional
// default val can be changable
// render UI using html tag and react classname as instance of class

var KRadioInput = React.createClass(

    propsTypes = {
        id: PropsTypes.string,
        name: PropsTypes.string.isRequired,
        value: PropsTypes.string.isRequired,
        checked: PropsTypes.bool.isRequired
    },

    getDefaultProps = {
        id: null,
        checked: false
    },

    getInitialState = function(){
        var id = this.props.id ? this.props.id : uniqueId('radio-');
        return {
            checked: !! this.props.checked,
            id:id,
            name: id
        }

    },


    render = function(){

        return(

            <div className = 'KRI'>

                <label>

                    {this.props.value}
      
                </label>
                
                <input type="radio"
                    name = {this,props.name}
                    id = {this.props.id}
                    checked = {this.state.checked}
                /> 
            </div>

        );
    }
);