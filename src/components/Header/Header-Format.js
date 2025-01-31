import Header from "./Header-Components/Header";

const style = {
    width: "100%",
    display: "flex",
    flexDirection: "flex-column",
    gap: "1rem",
    padding: "1rem 2rem"
};

function HeaderFormat() {
    return (
        <div className="header" style={style}>
            <Header headerTitle="Wolves Back" />
        </div>
    )
}

export default HeaderFormat;