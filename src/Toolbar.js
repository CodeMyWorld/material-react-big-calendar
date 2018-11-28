import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import { navigate } from './utils/constants'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'

class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    localizer: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired,
  }

  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="rbc-toolbar">
        <div className="rbc-btn-group">
          <Button
            variant="contained"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </Button>
          <IconButton
            variant="contained"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            variant="contained"
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            <NavigateNext />
          </IconButton>
        </div>
        <div className="rbc-toolbar-label">
          <Typography color="textPrimary" variant="h4">
            {label}
          </Typography>
        </div>

        {/* <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span> */}
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={cn({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

export default Toolbar
