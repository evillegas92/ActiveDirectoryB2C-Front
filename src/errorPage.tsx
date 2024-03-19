import { useRouteError } from "react-router-dom";

/* pretty much all of our errors will now be handled by this page instead of infinite spinners, unresponsive pages, or blank screens 🙌 */
export default function ErrorPage() {
    const error = useRouteError() as any;
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}