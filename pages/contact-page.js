import React from 'react'

import Layout from '../components/Layout'

export default function Contact() {
    return (
        <Layout>
            <div className='bg-white text-center shadow-2xl p-8 w-6/12 rounded font-mono'>
                <h1 className='font-bold '>お問合せフォーム</h1>
                <p><span>必須</span>氏名</p>
                <input className='bg-gray-200 focus:bg-gray-50 placeholder-gray-600' type="text" placeholder='例）氏名' />
                <p><span>必須</span>メールアドレス</p>
                <input className='bg-gray-200 focus:bg-gray-50 placeholder-gray-600' type="text" placeholder='例）example@gmail.com' />
                <p><span>任意</span>電話番号</p>
                <input className='bg-gray-200 focus:bg-gray-50 placeholder-gray-600' type="text" placeholder='例）000-0000-000' />
                <p>
                    <span>必須</span>お問い合わせ内容
                </p>
                <textarea className="bg-gray-200 focus:bg-gray-50"></textarea>
                <button className='flex items-center m-auto mt-5 bg-blue-500'>送信</button>
            </div>
        </Layout>
    );
}
{/* <div class="Form">
<div class="Form-Item">
<p class="Form-Item-Label">
<span class="Form-Item-Label-Required">必須</span>会社名
</p>
<input type="text" class="Form-Item-Input" placeholder="例）株式会社令和">
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
</div> */}