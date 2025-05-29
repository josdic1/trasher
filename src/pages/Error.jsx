import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()

return (
<>
{error.type}
{error.message}
{error.status}
<a href="/">Go</a>
</>
)}

export default Error
