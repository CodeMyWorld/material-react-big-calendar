import PropTypes from 'prop-types'
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutline from '@material-ui/icons/AddCircle'
import ViewList from '@material-ui/icons/FormatListBulleted'

const btnStyle = {
  padding: 7,
  marginLeft: 0,
}

const iconStyle = {
  fontSize: 17,
}

const DateHeader = ({ label, drilldownView, date, addEvent, showAll }) => {
  if (!drilldownView) {
    return <span>{label}</span>
  }

  return (
    <div>
      <IconButton
        color="primary"
        style={btnStyle}
        variant="contained"
        onClick={() => addEvent(date)}
      >
        <AddCircleOutline style={iconStyle} />
      </IconButton>
      <IconButton
        color="secondary"
        style={btnStyle}
        variant="contained"
        onClick={() => showAll(date)}
      >
        <ViewList style={iconStyle} />
      </IconButton>
      <span className="rbc-dateheader-label">{label}</span>
    </div>
  )
}

DateHeader.propTypes = {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool,
  addEvent: PropTypes.func,
  showAll: PropTypes.func,
}

export default DateHeader
