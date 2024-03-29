import React, { Component ,useEffect,useState,useRef} from 'react'

class ClassTimer extends Component {

  interval
  constructor(props) {
    super(props)

    this.state = {
       timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => (this.setState({timer: prevState.timer + 1})))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer} -
        <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    )
  }
}

export function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export function HookTimer() {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef()
    useEffect(() => {
      interValRef.current = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
      return () => {
        clearInterval(interValRef.current)
      }
    }, [])
    return (
      <div>
        HookTimer - {timer} -
        <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
      </div>
    )
  }

export default ClassTimer