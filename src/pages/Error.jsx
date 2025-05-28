import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()

return (
<>
{error.type}
{error.message}
{error.status}
</>
)}

export default Error
