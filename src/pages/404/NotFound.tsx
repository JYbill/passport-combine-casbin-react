/**
 * @file: NotFound.tsx
 * @author: xiaoqinvar
 * @desc：404页面
 * @date: 2022-08-17 15:53:28
 */
import { Empty, Button } from "@douyinfe/semi-ui";
import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // init
  const navigate = useNavigate();

  // component.
  const NotFoundTipComponent = (
    <div>
      <p>未找到您需要的页面</p>
      <Button theme="solid" type="tertiary" onClick={() => navigate("/")}>
        返回首页
      </Button>
    </div>
  );
  return (
    <div className="NotFound">
      <Empty
        image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationNotFoundDark style={{ width: 150, height: 150 }} />
        }
        title={"页面404"}
        description={NotFoundTipComponent}
      />
    </div>
  );
}
