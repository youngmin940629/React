# Unity WebView

- 팀에서 구현할 메타버스 내에서 whiteboard나 게임들을 [web.io](http://web.io) 를 통해 보여줄 것인데 유니티 안에서 이러한 웹사이트를 보여지게하는 plugin
- https://github.com/gree/unity-webview

⇒ but!!!!!!!!!! window에선 지원 안함 ㅠㅠ (보안이 엄격한? 문제라는데..)

- 대안 : webgl 배포할 때 unity와 web(JS) 양방향 통신으로 iframe 태그를 이용

https://docs.unity3d.com/kr/530/Manual/UnityWebPlayerandbrowsercommunication.htm

1. Vanilla JS

- Web 에서 Unity 함수 호출

```jsx
<script type="text/javascript" language="javascript">
<!--
//initializing the WebPlayer
var u = new UnityObject2();
u.initPlugin(jQuery("#unityPlayer")[0], "Example.unity3d");

function SaySomethingToUnity()
{
    u.getUnity().SendMessage("MyObject", "MyFunction", "Hello from a web page!");
}
-->
</script>
```

Unity Web Player는 SendMessage() 라는 함수를 통해 Web Player 함수를 자유롭게 호출이 가능.

위의 코드는 unity 내에 게임 오브젝트이름이 MyObject이고 Myfunction이라는 함수 이름을 가진 스크립트를 불러옴.

```csharp
function MyFunction(param : String)
{
    Debug.Log(param);
}
```

- Unity Web Player에서 브라우저 코드 실행

```csharp
Application.ExternalCall( "SayHello", "The game says hello!" );
```

Unity Web Player 내에서 Web 페이지의 함수를 호출하려면 Application.ExternalCall()(../ScriptReference/Application.ExternalCall.html) 함수를 사용해야함.

이 함수에 임의의 수의 파라미터를 전달하여 Web 페이지에 정의된 임의의 Javascript 함수를 호출할 수 있고, 여기서 예로 Application.ExternalCall() 함수를 사용하여 Web 페이지의 SayHello() 함수에 문자열 파라미터를 전달함.

```jsx
<script type="text/javascript" language="javascript">
<!--
function SayHello( arg )
{
    // show the message
    alert( arg );
}
-->
</script>
```

1. react-unity-webgl

- 리액트에서 webgl로 배포한 unity player를 좀 더 편하게 사용하라고 라이브러리를 **Jeffrey Lanters** 이 분이 만드심
- https://www.npmjs.com/package/react-unity-webgl
- from React to Unity

```jsx
// File: App.jsx

import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/myunityapp.loader.js",
  dataUrl: "build/myunityapp.data",
  frameworkUrl: "build/myunityapp.framework.js",
  codeUrl: "build/myunityapp.wasm",
});

function App() {
  function spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }

  return (
    <div>
      <button onClick={spawnEnemies}>Spawn a bunch!</button>
      <Unity unityContext={unityContext} />
    </div>
  );
}
```

UnityContext 에 있는 send 메서드를 통해 GameController에 있는 SpawnEnemies 함수를 호출하는 코드이다. 여기서 UnityContext.send(args*) 가 Vanilla JS 에서 SendMessage() 역할을 함!

```csharp
// File: EnemyController.cs
// Attached to GameObject "GameController"

public class EnemyController : MonoBehaviour {
  public void SpawnEnemies (int amount) {
    Debug.Log ($"Spawning {amount} enemies!");
  }
}
```

위 React코드에서 불러오려는 EnemyController 클래스의 SpawnEnemies 함수.

- from Unity to React

```jsx
// File: App.jsx

import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/myunityapp.loader.js",
  dataUrl: "build/myunityapp.data",
  frameworkUrl: "build/myunityapp.framework.js",
  codeUrl: "build/myunityapp.wasm",
});

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  useEffect(function () {
    unityContext.on("GameOver", function (userName, score) {
      setIsGameOver(true);
      setUserName(userName);
      setScore(score);
    });
  }, []);

  return (
    <div>
      {isGameOver === true && <p>{`Game Over! ${userName} ${score} points`}</p>}
      <Unity unityContext={unityContext} />
    </div>
  );
}
// File: MyPlugin.jslib

mergeInto(LibraryManager.library, {
  GameOver: function (userName, score) {
    window.dispatchReactUnityEvent(
      "GameOver",
      Pointer_stringify(userName),
      score
    );
  },
});
```

React에 Event Listener를 보내기위해 Unity Project 빌드 디렉토리에 JSLib 파일이 있어야한다.