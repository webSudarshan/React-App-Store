import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
