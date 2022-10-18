interface SidebarProp {
  name: string;
  active?: boolean;
}

const SidebarList = (prop: SidebarProp) => {
  const activeClass = ""

  const classes = `text-lg w-full pl-4 ${prop.active ? 'box-border border-l-4 border-red-500' : ''}`;

  return (
    <li className={classes}>
      { prop.name }
    </li>
  )
};

export const SidebarMenu = () => {
  const menus = [
    {
      pathname: '/',
      name: 'Beranda'
    },
    {
      pathname: '/driver-management',
      name: 'Driver Management',
      active: true
    },
    {
      pathname: '/pickup',
      name: 'Pickup'
    },
  ];

  return (
    <ul>
      {
        menus.map((menu) => {
          return (<SidebarList key={menu.name} name={menu.name} active={menu.active} />)
        })
      }
    </ul>
  )
};

export default SidebarMenu;
