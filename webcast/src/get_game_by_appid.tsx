import { Detail, LaunchProps } from "@raycast/api";
import { useExec } from "@raycast/utils";

export default function Command(props: LaunchProps<{ arguments: Arguments.MyCommand }>) {
  const { appId } = props.arguments;
  const execCmd = `/Users/bytedance/.ccli/site/get_game_by_appid ${appId}`
  const { isLoading, data } = useExec(execCmd, {shell: true});
  const formatted = `
  \`\`\`json
  ${data}
  \`\`\`
  `

  return <Detail isLoading={isLoading} markdown={formatted}>
  </Detail>;
}