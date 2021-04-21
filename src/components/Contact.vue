<template>
  <div id="contact">
    <h1>Contact</h1>
    <p>お問い合わせ</p><br>
    <div class="Form">
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>会社名
        </p>
        <input type="text" class="Form-Item-Input" placeholder="例）株式会社〇〇">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>氏名</p>
        <input type="text" class="Form-Item-Input" placeholder="例）山田太郎">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
        <input type="text" class="Form-Item-Input" placeholder="例）000-0000-0000">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
        <input type="email" class="Form-Item-Input" placeholder="例）example@gmail.com">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
        <textarea class="Form-Item-Textarea"></textarea>
      </div>
      <input type="submit" class="Form-Btn" value="送信する">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#contact h1 {
  margin-top: 40px;
  font-weight: bold;
}

.Form {
  margin: 0 auto;
  width: 60%;
}

.Form-Item {
  border-top: 1px solid #ddd;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
}

@media screen and (max-width: 960px) {
  .Form-Item {
    display: inline-block;
  }
}

.Form-Item:nth-child(5) {
  border-bottom: 1px solid #ddd;
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}

.Form-Item-Label.isMsg {
  margin-top: 4px;
}

@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    font-size: 16px;
    padding-bottom: 17px;
  }
}

.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 14px;
}

.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}

.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}

.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #5bc8ac;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
}

</style>
