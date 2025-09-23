package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net"
	"net/http"

	"github.com/webview/webview"
)

//go:embed dist/index.html dist/* dist/assets/*
var embededFiles embed.FS

func main() {
	listener, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		panic(err)
	}

	http.Handle("/", http.FileServer(getFileSystem()))
	fmt.Println(listener.Addr().String())
	go http.Serve(listener, nil)

	debug := true
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("r2-calculator")
	w.SetSize(400, 600, webview.HintNone)
	w.Navigate("http://" + listener.Addr().String())
	w.Run()

}

func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(embededFiles, "dist")
	if err != nil {
		panic(err)
	}

	return http.FS(fsys)
}
