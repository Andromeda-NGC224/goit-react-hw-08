import { Oval } from 'react-loader-spinner'


export default function Loader() {

  return <Oval
  visible={true}
  height="30"
  width="30"
    color="rgb(0, 0, 0)"
    secondaryColor="rgb(82, 81, 81)"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
}
