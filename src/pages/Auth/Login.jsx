import { Button, Carousel, Form, Input, Checkbox } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthCarosel from '../../components/auth/AuthCarosel'

const Login = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-between h-full'>
        <div className='xl:px-20 px-10 flex flex-col w-full h-full justify-center relative'>
          <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
          <Form layout='vertical'>
            <Form.Item label="E-mail" name={"email"} rules={[{ required: true, message: "E-mail Alanı Boş Bırakılamaz!" }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Şifre" name={"password"} rules={[{ required: true, message: "Şifre Alanı Boş Bırakılamaz!" }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item name={"remember"} valuePropName='checked'>
                <div className='flex justify-between items-center'>
                    <Checkbox>Remember me</Checkbox>
                    <Link>Forget Password?</Link>
                </div>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='w-full' size='large'>Giriş yap</Button>
            </Form.Item>
          </Form>
          <div className='flex justify-center absolute left-0 bottom-10 w-full'>
           Henüz bir hesabınız yok mu? &nbsp; <Link to="/register" className='text-blue-600'>Şimdi kayıt ol</Link>
          </div>
        </div>
        <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full items-center'>
          <div className='w-full'>
            <Carousel className='!h-full px-6' autoplay>
              <AuthCarosel img="/images/responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla Uyumluluk" />
              <AuthCarosel img="/images/statistic.svg" title="İstatistikler" desc="Geniş Tutulan İstatistikler" />
              <AuthCarosel img="/images/customer.svg" title="Müşteri Memnuniyeti" desc="Deneyim Sonunda Üründen Memnun Müşteriler" />
              <AuthCarosel img="/images/admin.svg" title="Yönetici Paneli" desc="Tek Yerden Yönetim" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login