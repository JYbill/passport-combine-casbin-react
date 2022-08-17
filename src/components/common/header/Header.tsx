/**
 * @file: Header.tsx
 * @author: xiaoqinvar
 * @desc：Header给公共组件
 * @date: 2022-08-17 16:27:02
 */
import { Button, Popover, Tag } from "@douyinfe/semi-ui";
import nodeCasbinImg from "images/node-casbin.png";
import { IconSun, IconMoon } from "@douyinfe/semi-icons";
import "./Header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  // init
  const body = document.body;
  const iconStyle = { color: "#9F9FA0", fontSize: "25px" };
  // 根据当前点击的状态设置icon组件
  const [iconComponent, setIconComponent] = useState(
    <IconMoon style={iconStyle} />
  );
  // 气泡主题popover内容
  const [popoverContent, setPopoverContent] = useState(<p>切换到暗色模式</p>);

  // btn onclick 修改颜色状态方法
  const changeColorTheme = () => {
    if (body.hasAttribute("theme-mode")) {
      // 亮色
      body.removeAttribute("theme-mode");
      setIconComponent(<IconSun style={iconStyle} />);
      setPopoverContent(<p>切换到暗色模式</p>);
    } else {
      // 暗色
      body.setAttribute("theme-mode", "dark");
      setIconComponent(<IconMoon style={iconStyle} />);
      setPopoverContent(<p>切换到亮色模式</p>);
    }
  };
  return (
    <div className="Header">
      <img src={nodeCasbinImg} />
      <div>
        <Popover showArrow arrowPointAtCenter content={popoverContent}>
          <Button
            icon={iconComponent}
            aria-label="颜色主题"
            onClick={changeColorTheme}
          />
        </Popover>
      </div>
    </div>
  );
}
