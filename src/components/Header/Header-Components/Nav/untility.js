function NavItem({value}) {
    return (
        <li><a href={"#" + value}>{value}</a></li>
    );
}




export default NavItem;